import { Children, useState, useRef } from 'react'
import { WithChildren } from 'types/common'
import cx from 'classnames'
import { StackedCard } from './StackedCard'

interface Props extends WithChildren {
  className?: string
  itemClassName?: string
}

export const StackedCardGroup = ({
  children,
  className,
  itemClassName,
}: Props) => {
  const childrenArray = Children.toArray(children)
  const [visibleAmount, setVisibleAmount] = useState(1)

  const elRefs = useRef<any[]>(new Array((childrenArray || []).length))

  return (
    <div className={cx('relative', className)}>
      {(childrenArray || []).map((c, i) => (
        <StackedCard
          key={i}
          index={i}
          elRefs={elRefs}
          visibleAmount={visibleAmount}
          setVisibleAmount={setVisibleAmount}
          className={itemClassName}
        >
          {c}
        </StackedCard>
      ))}
    </div>
  )
}
