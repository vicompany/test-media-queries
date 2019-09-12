import { LitElement, css, html } from 'lit-element';

import styles from './style.css';

export default class AppView extends LitElement {
    static styles = css([styles]);

    render() {
        return html`<main>
            <h1 class="title">Media Query Test Page</h1>
            <p>This is a test page for system-level media queries. Some of these, like <code>prefers-reduced-motion</code>, will change based on your system settings.</p>
        
            <x-feature-test-list refreshrate="3000"></x-feature-test-list>
        </main>`;
    }
}

customElements.define('x-app', AppView);
