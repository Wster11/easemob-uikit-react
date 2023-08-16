import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './style/style.scss';
import { ConfigContext } from '../../component/config/index';
import Avatar from '../../component/avatar';
import { getStore } from '../store/index';
import { observer } from 'mobx-react-lite';
import { getUsersInfo } from '../utils/index';
import Button from '../../component/button';
import Icon from '../../component/icon';
export interface TypingProps {
  prefix?: string;
  className?: string;
  style?: React.CSSProperties;
  userId: string;
}

const UserProfile = (props: TypingProps) => {
  const { prefix: customizePrefixCls, className, style, userId } = props;
  const { addressStore } = getStore();
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('user-profile', customizePrefixCls);
  const classString = classNames(prefixCls, className);
  const { avatarurl, nickname, isOnline } = addressStore.appUsersInfo?.[userId] || {};

  useEffect(() => {
    if (!addressStore.appUsersInfo?.[userId]) {
      getUsersInfo({
        userIdList: [userId],
      });
    }
  }, []);

  return (
    <div className={classString} style={style}>
      <Avatar size={80} isOnline={isOnline} src={avatarurl}>
        {userId}
      </Avatar>
      <div className={`${prefixCls}-nick`}>{nickname}</div>
      <div className={`${prefixCls}-id`}>Agora ID: {userId}</div>
      {
        <Button className={`${prefixCls}-action-btn`}>
          <div className={`${prefixCls}-action`}>
            <Icon width={'24px'} height={'24px'} type="ADD_FRIEND"></Icon>
            <span className={`${prefixCls}-action-name`}>Add Contact</span>
          </div>
        </Button>
      }
    </div>
  );
};

export default observer(UserProfile);
