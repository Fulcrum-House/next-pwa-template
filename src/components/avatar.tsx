import { getInitials } from '../util/helpers'

type Props = {
  src?: string
  size?: number
  children?: React.ReactNode
}

export default ({ src, size = 38, children }: Props) => {
  const string = children ? children.toString() : ''
  const text = string.split(' ').length > 1 ? getInitials(string) : string[0]

  return (
    <div style={{ backgroundImage: src ? `url(${src})` : '' }}>
      {!src && text}

      <style jsx>{`
        div {
          color: white;
          width: ${size}px;
          height: ${size}px;
          line-height: ${size}px;
          font-size: calc(${size}px * 0.35);
          font-weight: var(--weight-bold);
          letter-spacing: 0.035em;
          background-color: var(--accent);
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 50%;
          box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
