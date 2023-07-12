import { shallowEqual, useSelector } from "react-redux"

// 로그인 상태 확인 

export default () => {
  const { walletAddress } = useSelector(s => s.auth, shallowEqual);
  return !!walletAddress;
}
