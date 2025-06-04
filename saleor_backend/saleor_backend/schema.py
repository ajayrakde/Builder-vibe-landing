import graphene

class Query(graphene.ObjectType):
    hello = graphene.String(description="A simple greeting")

    def resolve_hello(root, info):
        return "Hello from Saleor sample API!"

schema = graphene.Schema(query=Query)
