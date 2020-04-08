import { useAppContext } from './index'

export default () => {
  const { apiPath } = useAppContext()
  return (
    <p>
      <span>API</span>
      <a target="_blank" href={ apiPath }>
        { apiPath }
      </a>
    </p>
  )
}