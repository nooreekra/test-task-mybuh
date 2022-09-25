import React from 'react'
import style from './documentsInfo.module.scss'
import editFileIcon from '../../../assets/icons/editFile.svg'
import fileIcon from '../../../assets/icons/file.svg'
import calendarIcon from '../../../assets/icons/calendar.svg'
import addFileIcon from '../../../assets/icons/addFile.svg'

type PropsType = {
    doc_number: number,
    doc_date: string
}

export const RelatedDocumentsBox = (props: PropsType) => {
    const {doc_number, doc_date} = props
    return (
        <div className={(style.relatedDocuments, style.box)}>
            <div className={style.boxHeader}>
                <h4>Связанные документы</h4>
            </div>
            <div className={style.boxContent}>
                <div className={style.flex}>
                    <div className={style.icon}><img src={addFileIcon} alt="file" /></div>
                    <div>
                        <p>Cчет на оплату</p>
                        <a href='#'>Добавить документ</a>
                    </div>
                </div>
                <div className={style.flex}>
                    <div className={style.icon}><img src={fileIcon} alt="file" className={style.filterBlueMedium} /></div>
                    <div>
                        <p>Cчет фактура</p>
                        <pre>{doc_number}  <img src={calendarIcon} alt="calendar" className={style.filterDarkBlueSmall} /> {doc_date}</pre>
                    </div>
                </div>
                <div className={style.flex}>
                    <div className={style.icon}><img src={editFileIcon} alt="file" /></div>
                    <div>
                        <p>ЭСФ</p>
                        <p>Документ не отправлен</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
