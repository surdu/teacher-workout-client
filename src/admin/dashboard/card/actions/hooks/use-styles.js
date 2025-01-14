import * as Material from '@material-ui/core'

export const useStyles = Material.makeStyles(theme => ({
  link: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 2,
    color: '#4F46E5',
    textDecoration: 'none',
    paddingLeft: '16',
  },
}))
