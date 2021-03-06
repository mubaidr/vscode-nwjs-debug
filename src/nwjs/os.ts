'use strict';

/**
 * Module dependencies
 */
import * as os from 'os';

function getArch():string
{
    const arch = os.arch();
    if (arch === 'ai32' && platform === 'win')
    {
        if (process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432'))
        {
            return 'x64';
        }
    }
    return arch;
}

function getPlatform():string
{
    const platformstr = os.platform();
    switch (platformstr)
    {
    case 'darwin': return 'osx';
    case 'win32': return 'win';
    default: return platformstr;
    }    
}

export const platform:string = getPlatform();
export const arch:string = getArch();
export const supportArch:Set<string> = new Set;

if (arch === 'x64' && (platform === 'win' || platform === 'linux'))
{
    supportArch.add('ia32');
}
supportArch.add(arch);

