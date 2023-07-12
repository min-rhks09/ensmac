import { shallowEqual, useSelector } from "react-redux"

// 지갑주소 불러오기

export default () => {
  const { walletAddress } = useSelector(s => s.auth, shallowEqual);
  return walletAddress;
}