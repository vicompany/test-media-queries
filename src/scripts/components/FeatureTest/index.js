import { LitElement, css, html } from 'lit-element';

import styles from './style.css';

export default class FeatureTestComponent extends LitElement {
    static get properties() {
        return {
            lastChecked: { type: String },
            model: { type: Object },
        };
    }
    
    static styles = css([styles]);

    constructor() {
        super();

        this.lastChecked = null;
        this.model = null;
    }

    firstUpdated() {
        this.setAttribute('role', 'region');
    }

    render() {
        for (const value of this.model.values) {
            if (window.matchMedia(`(${this.model.name}: ${value})`).matches) {
                return html`<header>
                    <h2 class="title">${this.model.name}</h2>
                    <span class="indicator indicator--positive"></span>
                </header>
                <div class="body">
                    <div><code>${value}</code></div>
                </div>
                <footer>
                    <a href="${this.model.specificationUrl}" class="link">
                        Specification
                        <span class="visually-hidden">for ${this.model.name}</span>
                    </a>
                </footer>`;
            }
        }

        return html`<header>
            <h2 class="title">${this.model.name}</h2>
            <span class="indicator indicator--negative"></span>
        </header>
        <div class="body">
            <p>Test failed. Your browser probably doesn&rsquo;t support this feature yet.</p>
        </div>
        <footer>
            <a href="${this.model.specificationUrl}" class="link">
                Specification
                <span class="visually-hidden">for ${this.model.name}</span>
            </a>
        </footer>`;
    }
}

customElements.define('x-feature-test', FeatureTestComponent);
