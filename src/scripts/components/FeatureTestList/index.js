import { LitElement, css, html } from 'lit-element';
import FeatureModel from '../../models/FeatureModel';

import styles from './style.css';

const features = new Set([
    new FeatureModel('any-hover', ['none', 'hover'], 'https://drafts.csswg.org/mediaqueries-4/#descdef-media-any-hover'),
    new FeatureModel('any-pointer', ['none', 'course', 'fine'], 'https://drafts.csswg.org/mediaqueries-4/#descdef-media-any-pointer'),
    new FeatureModel('display-mode', ['fullscreen', 'standalone', 'minimal-ui', 'browser'], 'https://w3c.github.io/manifest/#the-display-mode-media-feature'),
    new FeatureModel('forced-colors', ['none', 'active'], 'https://drafts.csswg.org/mediaqueries-5/#forced-colors'),
    new FeatureModel('grid', ['0', '1'], 'https://drafts.csswg.org/mediaqueries-4/#grid'),
    new FeatureModel('hover', ['none', 'hover'], 'https://drafts.csswg.org/mediaqueries-4/#hover'),
    new FeatureModel('inverted-colors', ['none', 'inverted'], 'https://drafts.csswg.org/mediaqueries-5/#inverted'),
    new FeatureModel('light-level', ['dim', 'normal', 'washed'], 'https://drafts.csswg.org/mediaqueries-5/#light-level'),
    new FeatureModel('monochrome', ['0', '1'], 'https://drafts.csswg.org/mediaqueries-4/#monochrome'),
    new FeatureModel('orientation', ['portrait', 'landscape'], 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation'),
    new FeatureModel('overflow-block', ['none', 'scroll', 'optional-paged', 'paged'], 'https://drafts.csswg.org/mediaqueries-4/#mf-overflow-block'),
    new FeatureModel('overflow-inline', ['none', 'scroll'], 'https://drafts.csswg.org/mediaqueries-4/#mf-overflow-inline'),
    new FeatureModel('pointer', ['none', 'course', 'fine'], 'https://drafts.csswg.org/mediaqueries-4/#pointer'),
    new FeatureModel('prefers-color-scheme', ['no-preference', 'dark', 'light'], 'https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme'),
    new FeatureModel('prefers-contrast', ['no-preference', 'high', 'low'], 'https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast'),
    new FeatureModel('prefers-reduced-motion', ['no-preference', 'reduce'], 'https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-reduced-motion'),
    new FeatureModel('prefers-reduced-transparency', ['no-preference', 'reduce'], 'https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-reduced-transparency'),
    new FeatureModel('scan', ['interlace', 'progressive'], 'https://drafts.csswg.org/mediaqueries-4/#scan'),
    new FeatureModel('scripting', ['none', 'initial-only', 'enabled'], 'https://drafts.csswg.org/mediaqueries-4/#scripting'),
    new FeatureModel('update', ['none', 'slow', 'fast'], 'https://drafts.csswg.org/mediaqueries-4/#update'),
]);

export default class FeatureTestListComponent extends LitElement {
    static get properties() {
        return {
            refreshRate: { type: Number },
        };
    }

    static styles = css([styles]);

    constructor() {
        super();

        this.refreshRate = 3000;
        this.refreshRateInterval = null;
    }

    firstUpdated() {
        this.refreshRateInterval = setInterval(() => this.requestUpdate(), this.refreshRate);
    }

    render() {
        return html`${Array.from(features).map((feature) => html`<x-feature-test
            .model="${feature}"
            lastchecked="${new Date().toISOString()}"></x-feature-test>`)}`;
    }
}

customElements.define('x-feature-test-list', FeatureTestListComponent);
