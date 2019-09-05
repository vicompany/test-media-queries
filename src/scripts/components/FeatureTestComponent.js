import { LitElement, css, html } from 'lit-element';
import StylesVisuallyHidden from '../styles/visually-hidden';

export default class FeatureTestComponent extends LitElement {
    static get properties() {
        return {
            lastChecked: { type: String },
            model: { type: Object },
        };
    }

    static get styles() {
        return css`:host {
            display: flex;
            flex-direction: column;
    
            border-radius: 0.25rem;
        
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
        }

        p {
            margin: 0;
        }
    
        .footer {
            flex: 0 0 auto;
            
            padding: 0.5rem 1rem;
            border-top: 1px solid var(--color-border);
        }
    
        .header__title {
            margin-bottom: 0;
            margin-top: 0;
    
            font-size: 1rem;
        }
    
        .header {
            display: flex;
            padding: 0.5rem 1rem;
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;

            flex: 0 0 auto;
    
            background-color: var(--color-foreground);
        
            color: var(--color-background);
        }

        .header__title {
            flex: 1 0 auto;
        }
    
        .main {
            flex: 1 0 auto;
            padding: 1rem;
        }

        .indicator {
            display: inline-block;
            height: 0.75rem;
            width: 0.75rem;
            border-radius: 50%;
            
            align-self: center;
        }

        .indicator--negative {
            background-color: #f00;
        }

        .indicator--positive {
            background-color: #0f0;
        }
        
        ${StylesVisuallyHidden}`;
    }

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
                return html`<header class="header">
                    <h2 class="header__title">${this.model.name}</h2>
                    <span class="indicator indicator--positive"></span>
                </header>
                <div class="main">
                    <div><code>${value}</code></div>
                </div>
                <footer class="footer">
                    <a href="${this.model.specificationUrl}" class="link">
                        Specification
                        <span class="visually-hidden">for ${this.model.name}</span>
                    </a>
                </footer>`;
            }
        }

        return html`<header class="header">
            <h2 class="header__title">${this.model.name}</h2>
            <span class="indicator indicator--negative"></span>
        </header>
        <div class="main">
            <p>Test failed. Your browser probably doesn&rsquo;t support this feature yet.</p>
        </div>
        <footer class="footer">
            <a href="${this.model.specificationUrl}" class="link">
                Specification
                <span class="visually-hidden">for ${this.model.name}</span>
            </a>
        </footer>`;
    }
}

customElements.define('x-feature-test', FeatureTestComponent);
