import React from "react";
import Styles from '../../../styles/CodeBlock.module.css'


/**
 *
 * @description For code blocks in articles
 * @param {*} properties
 * @return {*} 
 */
function CodeBlock({ codeBlock }) {

    const base64Decoder = () => {
        return Buffer.from(codeBlock, "base64").toString("utf8")
    }

    return (
        <>
            <div className={Styles.codeblockComponentBody}>
                <div className={Styles.componentCodeBlockMain}>
                    <pre className={Styles.preCodeBlock}>
                        {base64Decoder()}
                    </pre>
                </div>
            </div>
        </>
    )
}

export default CodeBlock