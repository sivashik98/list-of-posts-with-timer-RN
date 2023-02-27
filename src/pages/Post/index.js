import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';

import StyledText from '../../components/styled/StyledText';
import BoxShadow from '../../components/BoxShadow';

import { titlesHandler } from '../../helpers/valuesHandler';
import { basicStyles, commonStyles } from '../../styles';
import { makeFirstSymbolCapitalize } from '../../helpers/strings';

const Post = ({ isFetchingPost, isRefreshing, post, onRefresh }) => {
  const isBusyPost = isFetchingPost || isRefreshing;
  const id = post?.id;
  const title = makeFirstSymbolCapitalize(titlesHandler(post?.title));
  const content = titlesHandler(post?.body);

  const handleRefresh = () => {
    onRefresh && onRefresh();
  };

  return (
    <View style={basicStyles.container}>
      <BoxShadow>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
          showsVerticalScrollIndicator={0}>
          <View style={commonStyles.rowCenterStart}>
            <StyledText bold fontSize={24}>
              id:
            </StyledText>

            <StyledText
              isLoading={isBusyPost}
              bold
              fontSize={24}
              styles={{ marginLeft: 15 }}>
              {id}
            </StyledText>
          </View>

          <StyledText
            isLoading={isBusyPost}
            bold
            fontSize={20}
            styles={{ marginTop: 15 }}>
            {title}
          </StyledText>

          <StyledText
            isLoading={isBusyPost}
            fontSize={20}
            styles={{ marginTop: 15 }}>
            {content}
          </StyledText>

          <StyledText
            isLoading={isBusyPost}
            fontSize={20}
            styles={{ marginTop: 15 }}>
            {content}
          </StyledText>

          <StyledText
            isLoading={isBusyPost}
            fontSize={20}
            styles={{ marginTop: 15 }}>
            {content}
          </StyledText>
        </ScrollView>
      </BoxShadow>
    </View>
  );
};

export default Post;
