import styled from 'styled-components';

export const StHeader = styled.div`
  width: 100vw;
  max-width: 1024px;
  height: calc(90px + 1vh + 1vw);
  padding: 0 2.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  color: ${({ theme }) => theme.clr.tertiary};
  background-color: ${({ theme }) => theme.bgclr.base};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')}
`;

export const StLogo = styled.div`
  font-size: 2.75rem;
`;

export const StMenu = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row')};
`;

export const StDropdownMenu = styled.div`
  cursor: pointer;
  position: relative;
`;

export const StDropdown = styled.ul`
  font-size: 1.25rem;
  position: absolute;
  right: -1rem;
  color: ${({ theme }) => theme.clr.base};
  background-color: ${({ theme }) => theme.bgclr.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  margin-top: 1rem;
`;

export const StDropdownItem = styled.li`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'flex-start')};
  padding: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.borderclr.base};
  &:last-child {
    color: ${({ theme }) => theme.clr.danger};
    border: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgclr.secondary};
  }
  svg {
    margin-right: 0.75rem;
  }
`;