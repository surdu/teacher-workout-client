import React from 'react'
import * as Material from '@material-ui/core'
import { Head } from 'admin/users/table/head'
import { Body } from 'admin/users/table/body'

const useStyles = Material.makeStyles({ root: { background: 'white' } })

export const Table = () => <Material.Box pt={3} className={useStyles().root}>
  <Material.Table>
    <Head />
    <Body />
  </Material.Table>
</Material.Box>

