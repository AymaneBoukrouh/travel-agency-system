# /bin/env python

import typer


app = typer.Typer(add_completion=False)


@app.command()
def run():
    '''
    run containers
    '''
    pass


@app.command()
def stop():
    '''
    stop containers
    '''
    pass


@app.command()
def test():
    '''
    run tests
    '''
    pass


if __name__ == '__main__':
    app()
