import { css } from "@emotion/css"
const useStyles = () => ({
    tableContainer: css`
        height: 90vh;
        margin-top: 50px;
    `,
    ctrl: css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 50px;
    `,
    addItem: css`
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `,
    indec: css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #2f426a;
        padding: 5px;
        color: #b2cde6;
    `
})

export default useStyles