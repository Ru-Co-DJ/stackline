import { css } from "@emotion/css"

const useStyles = () => ({

    paper: css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        margin: 20px;
        width: 300px;
        overflow: hidden;
        background-color: transparent;
        color: #2f426a;
        border: 1px solid;
        border-color: #2f426a;
        border-radius: 5px;
        box-shadow: 0px 0px 9px #e76581;
        &:hover{
            box-shadow: 0px 0px 9px #2f426a;
        };
        cursor: pointer;

    `,
    container: css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    `,
    row: css`
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: space-between;
        flex-direction: row;
        margin: 5px;
    `,
    search: css`
    display: flex;
    justify-content: center;
    align-items: center;
    `,
    dialHead: css`
        background-color: #2f426a;
        color: #b2cde6;
        display: flex;
        justify-content: space-between;
        align-items: space-between;
        flex-direction: row;
    `
})

export default useStyles