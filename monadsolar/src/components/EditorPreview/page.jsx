import React from 'react'
import styles from "../../app/account/account.module.css"
const EditorPreview = ({value}) => {
  return (
            <div className={styles.form_container_preview}  >
                <div  dangerouslySetInnerHTML={{ __html: value }}></div>
              </div>

  )
}

export default EditorPreview
