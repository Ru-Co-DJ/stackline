import { css } from "@emotion/css"

const useStyle = () => ({
    footer: css`
        max-width: 100%;
        max-height: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color:transparent;
        color : #2f426a;
        position: static;
        bottom: 0;
        margin-top: 50px;
    `,
    row: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    `
})

export default useStyle