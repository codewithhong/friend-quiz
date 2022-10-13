/* eslint-disable jsx-a11y/anchor-has-content */
import { Anchor, AnchorProps } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons'
import Link from 'next/link'
import React from 'react'

import { useStyles } from './Link.styles'

const CustomLink = ({
  href,
  children,
  noIcon = false,
  ...rest
}: React.ComponentPropsWithRef<'a'> & {
  noIcon?: boolean
} & AnchorProps) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const { classes } = useStyles()

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <Anchor {...rest}>{children}</Anchor>
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <Anchor href={href} {...rest}>
        {children}
      </Anchor>
    )
  }

  return (
    <Anchor target='_blank' rel='noopener noreferrer' href={href} {...rest}>
      {children}
      {!noIcon && (
        <span>
          <IconExternalLink size={18} className={classes.externalLink} />
        </span>
      )}
    </Anchor>
  )
}

export default CustomLink
