import React from 'react';

const AVATAR_STYLE = {
  width: 32,
  textAlign: 'center',
  fontSize: 24,
};

export default function Avatar(props) {
  const { photoURL } = props.user;
  if (photoURL) {
    return <img src={photoURL} className="img-rouded" style={AVATAR_STYLE} />;
  }
  return (
    <div style={AVATAR_STYLE}>
      <span className="icon icon-user" />
    </div>
  );
}
