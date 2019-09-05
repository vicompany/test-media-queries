import { LitElement, css, html } from 'lit-element';

export default class AppView extends LitElement {
    static get styles() {
        return css`.title {
            margin-top: 0;
        }`;
    }

    render() {
        return html`<main>
            <h1 class="title">Media Query Test Page</h1>
            <p>This is a test page for system-level media queries. Some of these, like <code>prefers-reduced-motion</code>, will change based on your system settings.</p>
        
            <x-feature-test-list refreshrate="3000"></x-feature-test-list>
        </main>`;
    }
}

customElements.define('x-app', AppView);
