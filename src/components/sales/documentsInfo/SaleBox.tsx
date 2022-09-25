import React, { useRef, useState } from 'react'
import thunderIcon from '../../../assets/icons/thunder.svg'
import cancelIcon from '../../../assets/icons/cancel.svg'
import style from './documentsInfo.module.scss'
import fileIcon from '../../../assets/icons/file.svg'
import calendarIcon from '../../../assets/icons/calendar.svg'

type PropsType = {
    state_id: number,
    doc_number: number,
    doc_date: string
}

export const SaleBox = (props: PropsType) => {
    const { state_id, doc_number, doc_date } = props
    const [stateId, setStateId] = useState(!!state_id)
    const thunderTextClasses = `${style.transitionThunder} ${stateId ? style.thunderActiveText : style.thunderDisabledText}`
    const cancelTextClasses = `${style.transitionCancel} ${stateId ? style.cancelDisabledText : style.cancelActiveText}`
    return (
        <div className={style.box}>
            <div id={style.saleHeader} className={stateId ? style.boxHeader : style.green}>
                <h4>Продажа</h4>
            </div>
            <div className={style.boxContent}>
                <div className={style.flex}>
                    <div className={style.icon}><img src={fileIcon} alt="file" /></div>
                    <div><p> Акт выполненных работ</p></div>
                </div>
                <div className={style.flex}>
                    <div className={style.icon}><span>№</span></div>
                    <div><p>{doc_number}</p></div>
                </div>
                <div className={style.flex}>
                    <div className={style.icon}><img src={calendarIcon} alt="file" /></div>
                    <div><p>{doc_date}</p></div>
                </div>

                <div className={style.buttons}>
                    <div className={style.thunderButton}>
                        <button
                            onClick={() => setStateId(false)}
                            className={stateId ? style.thunderActive : style.thunderDisabled}>
                            <img src={thunderIcon} alt="thunder" />
                        </button>
                        <div className={thunderTextClasses}>
                            <p>{stateId ? 'Провести документ' : 'Документ проведен'}</p>
                        </div>
                    </div>
                    <div className={style.cancelButton}>
                        <div className={cancelTextClasses} >
                            <p>{stateId ? 'Документ не проведен' : 'Отменить проводку'}</p>
                        </div>
                        <button
                            onClick={() => setStateId(true)}
                            className={stateId ? style.cancelDisabled : style.cancelActive}>
                            <img src={cancelIcon} alt="cancel" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
