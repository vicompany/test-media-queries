import { css } from 'lit-element';

export default css`.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
}`;