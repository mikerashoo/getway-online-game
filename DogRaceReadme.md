## To Exit a game:
CBetPanel.unload()

## To Skip Start
Added this._onButPlayRelease(); to CMenu._init

## To fix refresh error

Added  if(_oLoadingText === undefined) {
            this.attachSprites();
        }
on Cpreloader this.refreshLoader