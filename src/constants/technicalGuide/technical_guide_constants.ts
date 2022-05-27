import {IInfoData} from '../../types/info.types';

export const DISABLING_BUILD_IN_BATTERY_INFO: IInfoData = {
  info:
    'To disable the built-in battery, do the following:\n' +
    '1. Reboot your computer and disconnect the ac power adapter and all cables from the computer.\n' +
    '2. When the logo screen is displayed, immediately press F1 to enter ThinkPad Setup.\n' +
    '3. Select Config ➙ Power. The Power submenu is displayed.\n' +
    '4. Select Disable built-in battery and press Enter.\n' +
    '5. Select Yes in the Setup Confirmation window. The built-in battery is disabled and the computer turns off\n' +
    '\n' +
    'To turn on the laptop, you must reconnect the AC adapter and press the power button.',
};

export const EMERGENCY_RESET_HOLE_INFO: IInfoData = {
  info:
    "If you have a Lenovo laptop with a built-in battery and it won't power on or wake-up from a sleep state, you can use the pin-hole emergency reset hole (button) to resolve the issue.\n" +
    'Disconnect the power adapter and depress this button with a paper-clip or similar item. Wait for 1 minute, then reconnect the AC adapter or power up using the battery.\n' +
    'The location of the reset button varies by model.',
};
