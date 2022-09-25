import React, { useState } from 'react'
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
    const {state_id, doc_number, doc_date} = props
    const [stateId, setStateId] = useState(!!state_id)
    const [stateTextThunder, setStateTextThunder] = useState(false)
    const [stateTextCancel, setStateTextCancel] = useState(false)

    return (
        <div className={(style.sale, style.box)}>
            <div id={style.saleHeader} className={stateId ? style.green : style.boxHeader}>
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
                            onMouseEnter={() => setStateTextThunder(true)}
                            onMouseLeave={() => setStateTextThunder(false)}
                            onClick={() => setStateId(true)}
                            className={stateId ? style.thunderDisabled : style.thunderActive}>
                            <img src={thunderIcon} alt="thunder" />
                        </button>
                        {
                            stateTextThunder && <div className={stateId ? style.thunderDisabledText : style.thunderActiveText}>
                                <p>{stateId ? 'Документ проведен' : 'Провести документ'}</p>
                            </div>
                        }
                    </div>
                    <div className={style.cancelButton}>
                        {
                            stateTextCancel && <div className={stateId ? style.cancelActiveText : style.cancelDisabledText}>
                                <p>{stateId ? 'Отменить проводку' : 'Документ не проведен'}</p>
                            </div>
                        }
                        <button
                            onMouseEnter={() => setStateTextCancel(true)}
                            onMouseLeave={() => setStateTextCancel(false)}
                            onClick={() => setStateId(false)}
                            className={stateId ? style.cancelActive : style.cancelDisabled}>
                            <img src={cancelIcon} alt="cancel" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
