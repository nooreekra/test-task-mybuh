import style from './documentViewer.module.scss'
import copyIcon from '../../../assets/icons/copy.svg'
import deleteIcon from '../../../assets/icons/delete.svg'
import emailIcon from '../../../assets/icons/email.svg'
import printIcon from '../../../assets/icons/print.svg'
import uploadIcon from '../../../assets/icons/upload.svg'
import editIcon from '../../../assets/icons/edit.svg'
import document from '../../../assets/files/test.pdf'
import { useState } from 'react'

type PropsType = {
    date_create: string,
    date_edit: string,
    file: string
}

export const DocumentViewer = (props: PropsType) => {
    const { date_create, date_edit, file} = props
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className={style.document}>
            <div className={style.documentEdit}>
                <img src={editIcon} alt="" />
                <img src={uploadIcon} alt="" />
                <img src={printIcon} alt="" />
                <img src={emailIcon} alt="" />
                <img src={copyIcon} alt="" />
                <img src={deleteIcon} alt="" />
            </div>
            <iframe
                src={document}
                frameBorder="0"
                scrolling="auto"
                height="100%"
                width="100%"
            ></iframe>
            <div className={style.documentInfo}>
                <div className={style.insertSeal}>
                    <input type="checkbox" className={style.checkbox} checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
                    <p onClick={() => setIsChecked(!isChecked)}>Вставить печать и подпись</p>
                </div>
                <div className={style.documentDate}>
                    <p>Добавлен {date_create}, изменен {date_edit}</p>
                </div>
            </div>
        </div>
    )
}
