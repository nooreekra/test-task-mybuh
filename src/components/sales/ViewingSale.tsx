import React, { useState } from 'react'
import common from '../../assets/common/style.module.scss'
import style from './viewingSale.module.scss'
import { Crumbs } from '../breadcrumbs/Crumbs'
import { Header } from '../header/Header'
import file from '../../assets/icons/file.svg'
import calendar from '../../assets/icons/calendar.svg'
import thunder from '../../assets/icons/thunder.svg'
import cancel from '../../assets/icons/cancel.svg'
import addFile from '../../assets/icons/addFile.svg'
import editFile from '../../assets/icons/editFile.svg'
import idFile from '../../assets/icons/idFile.svg'
import document from '../../assets/files/test.pdf'
import copyIcon from '../../assets/icons/copy.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import emailIcon from '../../assets/icons/email.svg'
import printIcon from '../../assets/icons/print.svg'
import uploadIcon from '../../assets/icons/upload.svg'
import editIcon from '../../assets/icons/edit.svg'

const data = {
    "doc_number": 128523,
    "doc_date": "02.06.2021",
    "date_create": "12.07.2022",
    "date_edit": "17.07.2022",
    "state_id": 1,
    "sf": {
        "doc_number": 185,
        "doc_date": "02.06.2021"
    },
    "operation": {
        "doc_number": 185,
        "doc_date": "02.06.2021"
    },
    "file": '',
    "esf": null,
    "invoice": null
}


export const ViewingSale = () => {
    const [stateId, setStateId] = useState(Boolean(data.state_id))
    const [stateTextThunder, setStateTextThunder] = useState(false)
    const [stateTextCancel, setStateTextCancel] = useState(false)

    return (
        <>
            <Header />
            <Crumbs />
            <div className={common.container}>
                <div className={style.documentsInfo}>
                    <div className={(style.sale, style.box)}>
                        <div id={style.saleHeader} className={stateId ? style.green : style.boxHeader}>
                            <h4>Продажа</h4>
                        </div>
                        <div className={style.boxContent}>
                            <div className={style.flex}>
                                <div className={style.icon}><img src={file} alt="file" /></div>
                                <div><p> Акт выполненных работ</p></div>
                            </div>
                            <div className={style.flex}>
                                <div className={style.icon}><span>№</span></div>
                                <div><p>{data.doc_number}</p></div>
                            </div>
                            <div className={style.flex}>
                                <div className={style.icon}><img src={calendar} alt="file" /></div>
                                <div><p>{data.doc_date}</p></div>
                            </div>

                            <div className={style.buttons}>
                                <div className={style.thunderButton}>
                                    <button
                                        onMouseEnter={() => setStateTextThunder(true)}
                                        onMouseLeave={() => setStateTextThunder(false)}
                                        onClick={() => setStateId(true)}
                                        className={stateId ? style.thunderDisabled : style.thunderActive}>
                                        <img src={thunder} alt="thunder" />
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
                                        <img src={cancel} alt="cancel" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={(style.relatedDocuments, style.box)}>
                        <div className={style.boxHeader}>
                            <h4>Связанные документы</h4>
                        </div>
                        <div className={style.boxContent}>
                            <div className={style.flex}>
                                <div className={style.icon}><img src={addFile} alt="file" /></div>
                                <div>
                                    <p>Cчет на оплату</p>
                                    <a href='#'>Добавить документ</a>
                                </div>
                            </div>
                            <div className={style.flex}>
                                <div className={style.icon}><img src={file} alt="file" className={style.filterBlueMedium} /></div>
                                <div>
                                    <p>Cчет фактура</p>
                                    <pre>{data.sf.doc_number}  <img src={calendar} alt="calendar" className={style.filterDarkBlueSmall} /> {data.sf.doc_date}</pre>
                                </div>
                            </div>
                            <div className={style.flex}>
                                <div className={style.icon}><img src={editFile} alt="file" /></div>
                                <div>
                                    <p>ЭСФ</p>
                                    <p>Документ не отправлен</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={(style.refunds, style.box)}>
                        <div className={style.boxHeader}>
                            <h4>Возвраты от покупателя</h4>
                        </div>
                        <div className={style.boxContent}>
                            <div>
                                <div className={style.flex}>
                                    <div className={style.icon}><img src={idFile} alt="file" /></div>
                                    <div>
                                        <pre>{data.sf.doc_number}  <img src={calendar} alt="calendar" className={style.filterDarkBlueSmall} /> {data.sf.doc_date}</pre>
                                    </div>
                                </div>
                                <div className={style.flex}>
                                    <div className={style.icon}><img src={addFile} alt="file" /></div>
                                    <div>
                                        <a href='#'>Добавить возврат</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.document}>
                    <div className={style.documentEdit}>
                        <a href=""><img src={editIcon} alt="" /></a>
                        <a href=""><img src={uploadIcon} alt="" /></a>
                        <a href=""><img src={printIcon} alt="" /></a>
                        <a href=""><img src={emailIcon} alt="" /></a>
                        <a href=""><img src={copyIcon} alt="" /></a>
                        <a href=""><img src={deleteIcon} alt="" /></a>
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
                            <input type="checkbox" />
                            <p>Вставить печать и подпись</p>
                        </div>
                        <div className={style.documentDate}>
                            <p>Добавлен {data.date_create}, изменен {data.date_edit}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
