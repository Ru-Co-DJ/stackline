import { css } from "@emotion/css"

const useStyles = () => ({
    container: css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top:30px;
        
    `, items: css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 50px;
        border: 1px solid;
        border-radius: 10px;
        border-color : #2f426a;
        padding: 40px;
        box-shadow: 0px 0px 9px rgba(0,0,0,0.5);


    `,
    indec: css`
        padding: 10px;
        background-color: #2f426a;
        color: white;
        border-radius: 10px;
    `,
    alternativ: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `
})

export default useStyles