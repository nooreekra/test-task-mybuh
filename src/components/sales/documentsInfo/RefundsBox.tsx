import React from 'react'
import calendarIcon from '../../../assets/icons/calendar.svg'
import addFileIcon from '../../../assets/icons/addFile.svg'
import idFileIcon from '../../../assets/icons/idFile.svg'
import style from './documentsInfo.module.scss'

type PropsType = {
    doc_number: number,
    doc_date: string
}

export const RefundsBox = (props: PropsType) => {
    const { doc_number, doc_date } = props
    return (
        <div className={(style.refunds, style.box)}>
            <div className={style.boxHeader}>
                <h4>Возвраты от покупателя</h4>
            </div>
            <div className={style.boxContent}>
                <div>
                    <div className={style.flex}>
                        <div className={style.icon}><img src={idFileIcon} alt="file" /></div>
                        <div>
                            <pre>{doc_number}  <img src={calendarIcon} alt="calendar" className={style.filterDarkBlueSmall} /> {doc_date}</pre>
                        </div>
                    </div>
                    <div className={style.flex}>
                        <div className={style.icon}><img src={addFileIcon} alt="file" /></div>
                        <div>
                            <a href='#'>Добавить возврат</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
