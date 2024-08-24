#!/usr/bin/env python3
"""A module to list all documents in a MongoDB collection."""


def list_all(mongo_collection):
    """
    Lists all documents in a collection.
    """
    return lis(mongo_collection.find())
