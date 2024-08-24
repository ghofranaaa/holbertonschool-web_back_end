#!/usr/bin/env python3
"""A module to insert a new document in a MongoDB collection."""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a collection based on kwargs.
    """
    new_document = mongo_collection.insert_one(kwargs)
    return new_document.inserted_id
