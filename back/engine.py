from sqlalchemy import create_engine,text

engine = create_engine("mysql+pymysql://username:password@localhost/database")
