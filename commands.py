# /bin/env python

import typer
import subprocess
from typing import Optional


app = typer.Typer(no_args_is_help=True, add_completion=False)


@app.command()
def run(
    containers: list[str] = typer.Argument(None, metavar='[CONTAINER...]', hidden=True),
    detach: bool = typer.Option(False, '--detach', '-d', help='detached mode: run in background')
):
    command = ['sh', 'scripts/run.sh']

    if detach:
        command.append('-d')
    if containers:
        command.extend(containers)
    
    subprocess.run(command)


@app.command()
def stop():
    pass


@app.command()
def test():
    subprocess.run(['sh', 'scripts/test.sh'])


if __name__ == '__main__':
    app()
    # TODO: Ctrl + C
