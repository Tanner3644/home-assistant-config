((LitElement) => {
  const html = LitElement.prototype.html;
  const css = LitElement.prototype.css;

  class RoombaVacuumCard extends LitElement {

      static get properties() {
          return {
              _hass: {},
              _config: {},
              stateObj: {},
              state: {},
              style: {}
          }
      }

      static get styles() {
          return css`
      .background {
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }
      .title-left {
        font-size: 20px;
        padding: 16px 16px 0;
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .title-right {
        font-size: 18px;
        padding: 16px 16px 0;
        text-align: right;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .content {
        cursor: pointer;
      }
      .flex {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
      .button {
        cursor: pointer;
        padding: 16px;
      }
      .button-blank {
        cursor: pointer;
        padding: 28px;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(2, auto);
      }
      .grid-content {
        display: grid;
        align-content: space-between;
        grid-row-gap: 6px;
      }
      .grid-left {
        text-align: left;
        font-size: 110%;
        padding-left: 10px;
        border-left: 2px solid var(--primary-color);
      }
      .grid-right {
        text-align: right;
        font-size: 110%;
        padding-right: 10px;
        border-right: 2px solid var(--primary-color);
      }
      .tabactive {
        display: grid;
      }
      .tabpassive {
        display: none;
      }
      .totals {
        border-right: 2px solid var(--primary-color)
      }
      .job {
        border-right: 2px solid var(--accent-color)
      }`;
      }

      render() {
          return html`
          <ha-card .hass="${this._hass}" .config="${this._config}" class="background" style="${this.style.background}">
            ${this.state.showTitle ?
            html`<div class="grid">
              ${this.state.name ?
              html`<div class="title-left" style="${this.style.text}" @click="${() => this.fireEvent('hass-more-info')}">${this.state.name}</div>` : html`<div class="title-left" style="${this.style.text}" @click="${() => this.fireEvent('hass-more-info')}"></div>`}
              ${this.state.showMaint ?
              html`<div class="title-right" style="${this.style.text}" @click="${() => this.fireEvent('hass-more-info')}"><ha-icon icon="mdi:wrench" style="padding-bottom: 5px"></ha-icon> <ha-icon icon="${this.getMaintStatus('icon')}" style="padding-bottom: 5px; color:${this.getMaintStatus('color')}"></ha-icon></div>` : null}
            </div>` : null }
            ${this.state.showLabels ? html`
            <div class="content grid" style="${this.style.content + this.style.text}" >
              <div class="grid-content grid-left" @click="${() => this.fireEvent('hass-more-info')}">
                <div>${this.getState('status')}</div>
                <div>${this.getValue('mode')}</div>
                <div>${this.getValue('battery')}</div>
                <div>${this.getValue('clean_base')}</div>
              </div>
              <div id="total" class="${this.state.hideRightGrid ? "grid-content " : "grid-content grid-right totals"} ${this.state.defaultTotals ? "tabactive" : "tabpassive"}" @click="${() => this.tabSwap('last')}">
              ${this.state.showTotals ? html`
                <div>${this.getValue('total_area')}</div>
                <div>${this.getValue('total_time')}</div>
                <div>${this.getValue('total_jobs')}</div>
                <div>${this.getValue('evac_events')}</div>` : null}
              </div>
              <div id="last" class="${this.state.hideRightGrid ? "grid-content " : "grid-content grid-right job"} ${this.state.defaultTotals ? "tabpassive" : "tabactive"}" @click="${() => this.tabSwap('total')}">
              ${this.state.showJob ? html`
                <div>${this.getValue('job_initiator')}</div>
                <div>${this.getValue('job_time')}</div>
                <div>${this.getValue('job_recharge')}</div>
                <div>${this.getValue('job_area')}</div>` : null}
              </div>
            </div>` : null}
            ${this.state.showButtons ? html`
            <div class="flex" style="${this.style.text}">
              ${Object.keys(this.state.buttons).map(this.renderButton.bind(this))}
            </div>` : null}
          </ha-card>`;
      }

      renderButton(key) {
          if (((key == "stop") && (this.stateObj.state == this.state.vac_states.ready)) || (this.stateObj.state == this.state.vac_states.pending) || (this.stateObj.state == this.state.vac_states.empty)) {
            return this.state.buttons[key]
            ? html`<div class="button-blank" style="cursor:default" @click="${() => this.tabSwap('total')}"></div>`
            : null;
          } else if (key != "blank") {
            return this.state.buttons[key]
              ? html`<div class="button" @tap="${() => this.callService(key)}"><ha-icon icon="${this.getButton(key,"icon")}"></ha-icon>  ${this.getButton(key,"label")}</div>`
              : null;
          } else {
            return this.state.buttons[key]
              ? html`<div class="button" style="cursor:default" @click="${() => this.tabSwap('total')}"></div>`  
              : null;
          }
      }

      getValue(field) {
          if ((this.state.attributes[field] === 'clean_base') && (!this.state.cleanBase)) { 
            field = this.state.attributes.bin;
            const bin_check = this.state.attributes.bin_present;
            const value = (this.stateObj && this.state.attributes[bin_check] in this.stateObj.attributes)
              ? this.stateObj.attributes[this.state.attributes[bin_check]]
              : (this._hass ? this._hass.localize('state.default.unavailable') : 'Unavailable');
            if (value === 'No') {
              return `${this.state.labels[field]}: Missing!`;
            };
          };
          if ((this.state.attributes[field] === 'evac_events') && (!this.state.cleanBase)) {  return `` };
          const value = (this.stateObj && this.state.attributes[field] in this.stateObj.attributes)
              ? this.stateObj.attributes[this.state.attributes[field]]
              : (this._hass ? this._hass.localize('state.default.unavailable') : 'Unavailable');
          return `${this.state.labels[field]}: ${value}`;
      };

      getState(field) {
        const value = this.stateObj.state;
        if (this.state.autoSwitch) {
          if (value !== this.state.vac_states.ready ? this.tabSwap('last') : this.tabSwap('total'));
        }
        return `${this.state.labels[field]}: ${value}`;
      };

      getMaintStatus(field) {
        switch(field) {
          case "icon":
            if (this.stateObj.attributes['maint_due'] === 'true') {
              return `mdi:alert`;
            } else {
              return `mdi:checkbox-marked`;
            }
          case "color":
            if (this.stateObj.attributes['maint_due'] === 'true') {
              return `red`;
            } else {
              return `green`;
            }
        }       
      };

      getButton(index, field) {
        switch(index) {
          case "startstop":
            if (this.stateObj.state === this.state.vac_states.ready) {
              // Full Clean
              switch(field) {
                case "label":
                  return `Full Clean`;
                case "icon":
                  return `mdi:play`;
                case "action":
                  return `start`;
              }
            } else if ((this.stateObj.attributes['phase'] === this.state.vac_states.paused) || (this.stateObj.attributes['phase'] === this.state.vac_states.stuck) || (this.stateObj.attributes['phase'] === this.state.vac_states.charge)) {
              // Resume
              switch(field) {
                case "label":
                  return `Resume`;
                case "icon":
                  return `mdi:play-pause`;
                case "action":
                    return `resume`;
              }
            } else {
              // Pause
              switch(field) {
                case "label":
                  return `Pause`;
                case "icon":
                  return `mdi:pause`;
                case "action":
                    return `pause`;
              }
            }
          case "dock":
            if ((this.stateObj.attributes['phase'] === this.state.vac_states.charge) || (this.stateObj.attributes['phase'] === this.state.vac_states.idle)) {
              // Resume
              switch(field) {
                case "label":
                  return `Empty Bin`;
                case "icon":
                  return `mdi:home-minus`;
                case "action":
                    return `dock`;
              }
            } else {
              // Pause
              switch(field) {
                case "label":
                  return `Dock`;
                case "icon":
                  return `mdi:home-minus`;
                case "action":
                    return `dock`;
              }
            }
          case "stop":
            // Stop
            if (this.stateObj.state === this.state.vac_states.ready) {
              // Blank
              switch(field) {
                case "label":
                  return ``;
                case "icon":
                  return ``;
                case "action":
                  return ``;
              }
            } else {
              // Stop
              switch(field) {
                case "label":
                  return `Stop`;
                case "icon":
                  return `mdi:stop`;
                case "action":
                    return `stop`;
              }
            }
        }       
      };

      tabSwap(tab) {
        // Swap Tabs
        switch(tab) {
          case "last":
            if (!this.state.showJob) { return; }
            var tabLast = this.shadowRoot.getElementById("total");
            if (tabLast !== null) { tabLast.style.display = "none" };
            var tabTotal = this.shadowRoot.getElementById("last");
            if (tabTotal !== null) { tabTotal.style.display = "grid" };
            break;
          case "total":
            if (!this.state.showTotals) { return; }
            var tabLast = this.shadowRoot.getElementById("last");
            if (tabLast !== null) { tabLast.style.display = "none" };
            var tabTotal = this.shadowRoot.getElementById("total");
            if (tabTotal !== null) { tabTotal.style.display = "grid" };
        }
      };

      callService(service) {
          this._hass.callService('rest_command', 'vacuum_action', {command: this.getButton(service,"action")});
      }

      fireEvent(type, options = {}) {
          const event = new Event(type, {
              bubbles: options.bubbles || true,
              cancelable: options.cancelable || true,
              composed: options.composed || true,
          });
          event.detail = {entityId: this.stateObj.entity_id};
          this.dispatchEvent(event);
      }

      getCardSize() {
          if (this.state.name && this.state.showButtons) return 5;
          if (this.state.name || this.state.showButtons) return 4;
          return 3;
      }

      setConfig(config) {
          const labels = {
              status: 'Status',
              mode: 'Mode',
              battery: 'Battery',
              clean_base: 'Clean Base',
              bin: 'Bin',
              maint: 'Maint',
              total_area: 'Area',
              total_time: 'Time',
              total_jobs: 'Jobs',
              evac_events: 'Evacs',
              job_initiator: 'Source',
              job_time: 'Time',
              job_recharge: 'Resume In',
              job_area: 'Area'
          };

          const vac_states = {
            ready: 'Ready',
            paused: 'Paused',
            stuck: 'Stuck',
            pending: 'Pending',
            charge: 'Charge',
            idle: 'Idle',
            empty: 'Empty'
          };

          const attributes = {
              status: 'state',
              battery: 'battery',
              mode: 'phase',
              clean_base: 'clean_base',
              bin: 'bin',
              bin_present: 'bin_present',
              maint_due: 'maint_due',
              total_area: 'total_area',
              total_time: 'total_time',
              total_jobs: 'total_jobs',
              evac_events: 'evac_events',
              job_initiator: 'job_initiator',
              job_time: 'job_time',
              job_recharge: 'job_recharge',
              job_area: 'job_area'
          };

          const buttons = {
              startstop: true,
              blank: false,
              stop: true,
              dock: true
          };

          if (!config.entity) throw new Error('Please define an entity.');
          if (config.entity.split('.')[0] !== 'sensor') throw new Error('Please define a sensor entity.');

          this.state = {
              showTotals: config.totals !== false,
              showJob: config.job !== false,
              showButtons: config.buttons !== false,
              showMaint: config.maint !== false,
              showLabels: config.labels !== false,
              showName: config.name !== false,
              cleanBase: config.clean_base !== false,
              showTitle: (config.name !== false || config.maint !== false),
              defaultTotals: config.defaultjob !== true ? (config.totals !== false ? true : false) : (config.job !== false ? false : true), 
              hideRightGrid: (config.totals === false && config.job === false),
              autoSwitch: config.autoswitch !== false,

              buttons: Object.assign({}, buttons, config.buttons),
              attributes: Object.assign({}, attributes, config.attributes),
              vac_states: Object.assign({}, vac_states, config.vac_states),
              labels: Object.assign({}, labels, config.labels),
          };

          this.style = {
              text: `cursor: pointer; color: ${config.image !== false ? 'white; text-shadow: 0 0 10px black;' : 'var(--primary-text-color);'}`,
              content: `padding: ${config.showButtons ? '16px 16px 4px' : '16px'};`,
              background: config.image !== false ? `background-image: url('${config.image || '/hacsfiles/lovelace-roomba-vacuum-card/vacuum.png'}')` : ''
          };

          this._config = config;
      }

      set hass(hass) {
          this._hass = hass;

          if (hass && this._config) {
              this.stateObj = this._config.entity in hass.states ? hass.states[this._config.entity] : null;

              if (this.stateObj && this.state.showName) {
                  this.state.name = this._config.name || this.stateObj.attributes.friendly_name;
              }
          }
      }
  }

  customElements.define('roomba-vacuum-card', RoombaVacuumCard);
})(window.LitElement || Object.getPrototypeOf(customElements.get("hui-view")));