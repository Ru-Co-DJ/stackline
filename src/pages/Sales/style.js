import { css } from "@emotion/css"

const useStyles = () => ({
    control: css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: row;
        margin: 50px;
    `,
    opt: css`
        padding: 10px;
        margin: 20px;
        background-color: #2f426a;
        color: #b2cde6;
        box-shadow: 0px 0px 5px #000;
        &:hover{
            background-color: #b2cde6;
            color: #2f426a;
            transition-duration: 350ms;
        };
        border-radius: 5px;
        cursor: pointer;
    `,
    addSale: css`
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