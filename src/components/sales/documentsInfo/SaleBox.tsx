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
    const [showChangeState, setShowChangeState] = useState(false)
    const [showState, setShowState] = useState(true)

    const thunderTextClasses = `${style.stateTransition} 
    ${stateId ? style.declinedState : style.acceptedState} 
    ${showState && style.stateText}`

    const cancelTextClasses = `${style.changeStateTransition} 
    ${stateId ? style.changeToAccept : style.changeToDecline} 
    ${showChangeState && style.changeStateText}`
    return (
        <div className={style.box}>
            <div id={style.saleHeader} className={stateId ? style.boxHeader : style.green}>
                <h4>Продажа</h4>
            </div>
            <div className={style.boxContent}>
                <div className={style.info}>
                    <div className={style.icon}><img src={fileIcon} alt="file" /></div>
                    <div><p> Акт выполненных работ</p></div>
                </div>
                <div className={style.info}>
                    <div className={style.icon}><span>№</span></div>
                    <div><p>{doc_number}</p></div>
                </div>
                <div className={style.info}>
                    <div className={style.icon}><img src={calendarIcon} alt="file" /></div>
                    <div><p>{doc_date}</p></div>
                </div>

                <div className={style.buttons} onMouseEnter={() => {
                        setShowState(false)
                        setShowChangeState(true)
                    }
                    } onMouseLeave={() => {
                        setShowState(true)
                        setShowChangeState(false) 
                    }}>
                    <div className={style.stateButton}>
                        <button
                            className={stateId ? style.declinedStateButton : style.acceptedStateButton}>
                            <img src={stateId ? cancelIcon : thunderIcon} alt="thunder" />
                        </button>
                        <div className={thunderTextClasses}>
                            <p>{stateId ? 'Документ не проведен' : 'Документ проведен'}</p>
                        </div>
                    </div>
                    <div className={style.changeStateButton} onClick={() => {
                        setStateId(!stateId)
                        setShowState(false)
                        setShowChangeState(true)
                        }}>
                        <div className={cancelTextClasses}>
                            <p>{stateId ? 'Провести документ' : 'Отменить проводку'}</p>
                        </div>
                        <button
                            className={stateId ? style.changeToAcceptButton : style.changeToDeclineButton}>
                            <img src={stateId ? thunderIcon : cancelIcon} alt="cancel" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
