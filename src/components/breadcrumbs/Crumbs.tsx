import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import style from './crumbs.module.scss'
import separator from '../../assets/icons/separator.svg'
export const Crumbs = () => {
  return (
    <div className={style.crumbs}>
      <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' separator={<img src={separator}></img>}>
          <Link underline='hover' href='#'>Документы</Link>
          <Link underline='hover' href='#'>Продажа</Link>
          <Typography color='text.primary' fontFamily="Open Sans">Просмотр продажи</Typography>
        </Breadcrumbs>
      </Box>
    </div>
  )
}
