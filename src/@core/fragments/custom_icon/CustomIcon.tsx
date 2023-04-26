// ** Type Import
import { IconProps } from '@iconify/react'

// ** Custom Icon Import
import IconifyIcon from '../icon'

const UserIcon = ({ icon, ...rest }: IconProps) => {
  return <IconifyIcon icon={icon} {...rest} />
}

export default UserIcon
