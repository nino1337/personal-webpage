import propTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import * as S from './StickyNavigation.styles';

const StickyNavigation = ({ navigationItems }) => {
  const [isActiveLink, setIsActiveLink] = useState(-1);
  const [anchorNodes, setAnchorNodes] = useState([]);
  const [navFixed, setNavFixed] = useState(false);
  const stickyNavigation = useRef(null);
  const navContainer = useRef(null);
  const NAV_HEIGHT = 90;

  useEffect(() => {
    const onScroll = () => {
      const windowTop = window.scrollY;
      const navContainerTop = navContainer.current.getBoundingClientRect().y;
      const stickyNavigationTop = stickyNavigation.current.getBoundingClientRect().y;

      setIsNavFixed(navContainerTop, stickyNavigationTop);
      setIsActiveSection(windowTop);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [navFixed]);

  useEffect(() => {
    const nodes = navigationItems
      .map(({ value }) => document.querySelector(value.anchor))
      .filter((node) => node);

    setAnchorNodes(nodes);
  }, []);

  const setIsNavFixed = (navContainerTop, stickyNavigationTop) => {
    if (stickyNavigationTop <= -(NAV_HEIGHT - 1) && !navFixed) {
      setNavFixed(true);
    } else if (navContainerTop >= 0 && navFixed) {
      setNavFixed(false);
    }
  };

  const setIsActiveSection = (windowTop) => {
    anchorNodes.forEach((anchor, index) => {
      const anchorTop = anchor.offsetTop;
      const anchorBottom = anchorTop + anchor.offsetHeight;

      if (windowTop + NAV_HEIGHT >= anchorTop && windowTop <= anchorBottom) {
        setIsActiveLink(index);
      }

      if (!navFixed) {
        setIsActiveLink(-1);
      }
    });
  };

  return (
    <S.NavContainer navHeight={NAV_HEIGHT} ref={navContainer}>
      <S.StickyNavigation navHeight={NAV_HEIGHT} isFixed={navFixed} ref={stickyNavigation}>
        <S.List>
          {navigationItems.map(({ value }, index) => (
            <S.Item key={value.anchor}>
              <S.Link href={value.anchor} isActive={isActiveLink === index}>
                {value.name}
              </S.Link>
            </S.Item>
          ))}
        </S.List>
      </S.StickyNavigation>
    </S.NavContainer>
  );
};

StickyNavigation.propTypes = {
  navigationItems: propTypes.array,
};

export default StickyNavigation;
