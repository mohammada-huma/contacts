from huma.core.plugin import HumaPlugin


class Config(HumaPlugin):
    default_auto_field = "django.db.models.BigAutoField"
    name = "huma.contacts.core"
    label = "huma_contacts_core"
