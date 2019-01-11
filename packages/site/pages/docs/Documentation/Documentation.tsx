import { Button, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import * as React from "react";


export default class Documentation extends React.Component {
  public render() {
    return (
      <div>

<Grid container justify="center">
            <Grid item xs={11} md={10}>
              <h2>Documentation</h2>
              <div>
                <input
                  type="search"
                  placeholder="Search..."
                  style={{ borderRadius: "4px", width: "80%" }}
                />
                <Button
                  type="submit"
                  style={{ position: "relative", backgroundColor: "#2196F3", color: "white" }}
                >
                  <SearchIcon />
                </Button>

                {/* <div>Documents</div> */}


          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>mdc-drawer</code></td>
                <td>Mandatory.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer__header</code></td>
                <td>Non-scrollable element that exists at the top of the drawer.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer__content</code></td>
                <td>Scrollable content area of the drawer.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer__title</code></td>
                <td>Title text element of the drawer.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer__subtitle</code></td>
                <td>Subtitle text element of the drawer.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer--dismissible</code></td>
                <td>Dismissible drawer variant class.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer--modal</code></td>
                <td>Modal drawer variant class.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer--open</code></td>
                <td>If present, indicates that the dismissible drawer is in the open position.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer--opening</code></td>
                <td>Applied while the drawer is animating from the closed to the open position.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer--closing</code></td>
                <td>Applied while the drawer is animating from the open to the closed position.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-app-content</code></td>
                <td>Mandatory for dismissible variant only. Sibling element that is resized when the drawer opens/closes.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-scrim</code></td>
                <td>Mandatory for modal variant only. Used for the overlay on the app content.</td>
              </tr>
            </tbody>
          </table>
          <h3 id="sass-mixins">Sass Mixins</h3>
          <table>
            <thead>
              <tr>
                <th>Mixin</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>mdc-drawer-border-color($color)</code></td>
                <td>Sets border color of <code>mdc-drawer</code> surface.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-divider-color($color)</code></td>
                <td>Sets divider color found between list groups.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-fill-color-accessible($color)</code></td>
                <td>Sets the fill color to <code>$color</code>, and list item and icon ink colors to an accessible color relative to <code>$color</code>.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-surface-fill-color($color)</code></td>
                <td>Sets the background color of <code>mdc-drawer</code>.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-title-ink-color($color)</code></td>
                <td>Sets the ink color of <code>mdc-drawer__title</code>.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-subtitle-ink-color</code></td>
                <td>Sets drawer subtitle and list subheader ink color.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-item-icon-ink-color($color)</code></td>
                <td>Sets drawer list item graphic icon ink color.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-item-text-ink-color($color)</code></td>
                <td>Sets drawer list item text ink color.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-item-activated-icon-ink-color($color)</code></td>
                <td>Sets activated drawer list item icon ink color.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-item-activated-text-ink-color($color)</code></td>
                <td>Sets activated drawer list item text ink color.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-shape-radius($radius)</code></td>
                <td>Sets the rounded shape to drawer with given radius size. <code>$radius</code> can be single radius or list of 2 radius values for trailing-top and trailing-bottom. Automatically flips the radius values in RTL context.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-item-shape-radius($radius, $rtl-reflexive)</code></td>
                <td>Sets the rounded shape to drawer navigation item with given radius size. Set <code>$rtl-reflexive</code> to true to flip radius values in RTL context, defaults to true.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-activated-overlay-color($color)</code></td>
                <td>Sets the overlay color of the activated drawer list item.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-scrim-fill-color($color)</code></td>
                <td>Sets the fill color of <code>mdc-drawer-scrim</code>.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-z-index($value)</code></td>
                <td>Sets the z index of drawer. Drawer stays on top of top app bar except for clipped variant of drawer.</td>
              </tr>
              <tr>
                <td><code>mdc-drawer-width($width)</code></td>
                <td>Sets the width of the drawer. In the case of the dismissible variant, also sets margin required for <code>mdc-drawer-app-content</code>.</td>
              </tr>
            </tbody>
          </table>
          <h2 id="mdcdrawer-properties-and-methods"><code>MDCDrawer</code> Properties and Methods</h2>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Value Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>open</code></td>
                <td>Boolean</td>
                <td>Proxies to the foundation’s <code>open</code>/<code>close</code> methods. Also returns true if drawer is in the open position.</td>
              </tr>
            </tbody>
          </table>
          <h3 id="events">Events</h3>
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Event Data Structure</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>MDCDrawer:opened</code></td>
                <td>None</td>
                <td>Emits when the navigation drawer has opened.</td>
              </tr>
              <tr>
                <td><code>MDCDrawer:closed</code></td>
                <td>None</td>
                <td>Emits when the navigation drawer has closed.</td>
              </tr>
            </tbody>
          </table>
          <h2 id="usage-within-web-frameworks">Usage within Web Frameworks</h2>
          <p>If you are using a JavaScript framework, such as React or Angular, you can create a Navigation Drawer for your framework. Depending on your needs, you can use the <em>Simple Approach: Wrapping MDC Web Vanilla Components</em>, or the <em>Advanced Approach: Using Foundations and Adapters</em>. Please follow the instructions <a href="/components/web/docs/framework-integration/">here</a>.</p>
          <h3 id="mdcdraweradapter"><code>MDCDrawerAdapter</code></h3>
          <table>
            <thead>
              <tr>
                <th>Method Signature</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>addClass(className: string) =&gt; void</code></td>
                <td>Adds a class to the root element.</td>
              </tr>
              <tr>
                <td><code>hasClass(className: string) =&gt; boolean</code></td>
                <td>Returns true if the root element contains the given <code>className</code>.</td>
              </tr>
              <tr>
                <td><code>removeClass(className: string) =&gt; void</code></td>
                <td>Removes a class from the root element.</td>
              </tr>
              <tr>
                <td><code>elementHasClass(element: !Element, className: string) =&gt; boolean</code></td>
                <td>Returns true if the an element contains the given class.</td>
              </tr>
              <tr>
                <td><code>saveFocus() =&gt; void</code></td>
                <td>Saves the focus of currently active element.</td>
              </tr>
              <tr>
                <td><code>restoreFocus() =&gt; void</code></td>
                <td>Restores focus to element previously saved with ‘saveFocus’.</td>
              </tr>
              <tr>
                <td><code>focusActiveNavigationItem() =&gt; void</code></td>
                <td>Focuses the active / selected navigation item.</td>
              </tr>
              <tr>
                <td><code>notifyClose() =&gt; void</code></td>
                <td>Emits the <code>MDCDrawer:closed</code> event.</td>
              </tr>
              <tr>
                <td><code>notifyOpen() =&gt; void</code></td>
                <td>Emits the <code>MDCDrawer:opened</code> event.</td>
              </tr>
              <tr>
                <td><code>trapFocus() =&gt; void</code></td>
                <td>Traps focus on root element and focuses the active navigation element.</td>
              </tr>
              <tr>
                <td><code>releaseFocus() =&gt; void</code></td>
                <td>Releases focus trap from root element which was set by <code>trapFocus</code> and restores focus to where it was prior to calling <code>trapFocus</code>.</td>
              </tr>
            </tbody>
          </table>
          <h3 id="foundations">Foundations</h3>
          <h4 id="mdcdismissibledrawerfoundation"><code>MDCDismissibleDrawerFoundation</code></h4>
          <table>
            <thead>
              <tr>
                <th>Method Signature</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>open() =&gt; void</code></td>
                <td>Opens the drawer from the closed state.</td>
              </tr>
              <tr>
                <td><code>close() =&gt; void</code></td>
                <td>Closes the drawer from the open state.</td>
              </tr>
              <tr>
                <td><code>isOpen() =&gt; boolean</code></td>
                <td>Returns true if the drawer is in the open position.</td>
              </tr>
              <tr>
                <td><code>isOpening() =&gt; boolean</code></td>
                <td>Returns true if the drawer is animating open.</td>
              </tr>
              <tr>
                <td><code>isClosing() =&gt; boolean</code></td>
                <td>Returns true if the drawer is animating closed.</td>
              </tr>
              <tr>
                <td><code>handleKeyDown(evt: Event) =&gt; void</code></td>
                <td>Handles the keydown event.</td>
              </tr>
              <tr>
                <td><code>handleTransitionEnd(evt: Event) =&gt; void</code></td>
                <td>Handles the transitionend event when the drawer finishes opening/closing.</td>
              </tr>
              <tr>
                <td><code>opened() =&gt; void</code></td>
                <td>Only called internally. Extension point for when drawer finishes open animation.</td>
              </tr>
              <tr>
                <td><code>closed() =&gt; void</code></td>
                <td>Only called internally. Extension point for when drawer finishes close animation.</td>
              </tr>
            </tbody>
          </table>
          <h4 id="mdcmodaldrawerfoundation-extends-mdcdismissibledrawerfoundation"><code>MDCModalDrawerFoundation</code> (extends <code>MDCDismissibleDrawerFoundation</code>)</h4>
          <table>
            <thead>
              <tr>
                <th>Method Signature</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>handleScrimClick() =&gt; void</code></td>
                <td>Handles click event on scrim.</td>
              </tr>
            </tbody>
          </table>





              </div>
            </Grid>
          </Grid>
      </div>
    )
  }
}