import styled from "styled-components";

export const LinkItem = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  line-height: 24px;
  padding: 16px 8px 16px 16px;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: height 0.3s, width 0.3s;
  &.active {
    color: var(--color-text-brand);
    background: var(--color-surface-accent);
  }
  &.is-collapsed {
    padding: 10px 8px 10px 8px;
  }
  &:hover {
    color: var(--color-text-brand);
    background: var(--color-surface-accent);
  }
`;

export const LinkText = styled.div`
  font-size: 16px;
  font-family: var(--font-family);
`;

export const TabItemsContainer = styled.div`
  padding: 24px 16px 24px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ExitBoxContainer = styled.div`
  position: absolute;
  margin-left: 16px;
  margin-right: 16px;
  left: 0;
  right: 0;
  bottom: 32px;
  color: #8c949d;
`;

export const SideBarContainer = styled.div`
  font-size: 30px;
  position: sticky;
  width: 288px;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: height 0.3s, width 0.3s;
  border-right: 1px solid var(--color-border-tertiary);
  z-index: 2;
  &.is-collapsed {
    width: 72px;
  }
`;

export const CollapsedButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50vh;
  right: -12px;
`;
