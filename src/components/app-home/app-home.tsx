import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <sl-tab-group>
          <sl-tab slot="nav" panel="general">General</sl-tab>
          <sl-tab slot="nav" panel="custom">Custom</sl-tab>
          <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>
          <sl-tab slot="nav" panel="disabled" disabled>Disabled</sl-tab>

          <sl-tab-panel name="general">

          <div class="details-group-example">
            <sl-details open>
              <h3 slot="summary">First</h3>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </sl-details>

            <sl-details open>
              <h3 slot="summary">Second</h3>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </sl-details>

            <sl-details open>
            <h3 slot="summary">Third</h3>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </sl-details>
          </div>

          </sl-tab-panel>
          <sl-tab-panel name="custom">This is the custom tab panel.</sl-tab-panel>
          <sl-tab-panel name="advanced">This is the advanced tab panel.</sl-tab-panel>
          <sl-tab-panel name="disabled">This is a disabled tab panel.</sl-tab-panel>
        </sl-tab-group>
      </div>
    );
  }
}
