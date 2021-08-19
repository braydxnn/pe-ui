import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const hudState = {
  health: atom({
    key: 'health',
    default: 0,
  }),
  armor: atom({
    key: 'armor',
    default: 0,
  }),
};

export const useHealthValue = () => useRecoilValue(hudState.health);
export const useSetHealth = () => useSetRecoilState(hudState.health);

export const useArmorValue = () => useRecoilValue(hudState.armor);
export const useSetArmor = () => useSetRecoilState(hudState.armor);
