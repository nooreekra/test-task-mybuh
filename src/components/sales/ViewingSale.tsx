import React, { useState } from 'react'
import common from '../../assets/common/style.module.scss'
import style from './viewingSale.module.scss'
import { DocumentViewer } from './documentViewer/DocumentViewer'
import { SaleBox } from './documentsInfo/SaleBox'
import { RelatedDocumentsBox } from './documentsInfo/RelatedDocumentsBox'
import { RefundsBox } from './documentsInfo/RefundsBox'

type DataPropsType = {
    doc_number: number,
    doc_date: string,
    date_create: string,
    date_edit: string,
    state_id: number,
    sf: {
        doc_number: number,
        doc_date: string
    },
    operation: {
        doc_number: number,
        doc_date: string
    },
    file: string,
    esf: null,
    invoice: null
}

type PropsType = {
    data: DataPropsType
}

export const ViewingSale = (props: PropsType) => {
    const { data } = props
    return (
        <>
            <div className={common.container}>
                <div className={style.documentsInfo}>
                    <SaleBox
                        state_id={data.state_id}
                        doc_number={data.doc_number}
                        doc_date={data.doc_date}
                    />
                    <RelatedDocumentsBox
                        doc_number={data.sf.doc_number}
                        doc_date={data.sf.doc_date}
                    />
                    <RefundsBox
                        doc_number={data.sf.doc_number}
                        doc_date={data.sf.doc_date}
                    />
                </div>
                <DocumentViewer
                    date_create={data.date_create}
                    date_edit={data.date_edit}
                    file={data.file}
                />
            </div>
        </>
    )
}
