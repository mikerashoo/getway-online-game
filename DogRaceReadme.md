## To Exit a game:

when playing:

 this.onExit of CGame 

On Menu 

CBetPanel.onExit()

## To Skip Start
Added this._onButPlayRelease(); to CMenu._init

## To fix refresh error

Added  if(_oLoadingText === undefined) {
            this.attachSprites();
        }
on Cpreloader this.refreshLoader